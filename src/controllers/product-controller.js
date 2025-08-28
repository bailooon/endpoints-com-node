const productRepository = require('../repositories/product-repository');
const ProductRepository = require('../repositories/product-repository');

class ProductController{

    async getAllProducts(req, res){
        try{
            const products = await ProductRepository.findAll();
            res.status(200).json(
                {
                    succes:true,
                    data:products,
                    message: 'Produtos listados com sucesso'

                }
            )

        } catch(error){
            res.status(500).json(
                {
                    succes:false,
                    message: 'erro ao buscar os produtos'
                }
            )
        }
    }

    async getProductById(req, res){
        try{
            const {id} = req.params;
            const product = await ProductRepository.findById(id);

            if(!product){
                return res.status(404).json(
                    {
                        succes:false,
                        message: 'Produto não encontrado'
                    }
                )
            }

            res.status(200).json(
                {
                    succes:true,
                    data:product,
                    message: 'Produto encontrado'

                }
            )

        } catch(error){
            res.status(500).json(
                {
                    succes:false,
                    message: 'erro ao buscar o produto'
                }
            )
        }

    }

    async createProduct(req, res){
        try{
            const productData = req.body;
            const newProduct = await productRepository.create(productData);
            res.status(201).json({
                success:true,
                data:newProduct,
                message:"Produto criado com sucesso"
            })
        } catch(error){
            res.status(500).json({
                success:false,
                message:"Erro ao criar o produto",
                error: error.message
            })

        }
    }

    async updateProduct(req,res){
        try {
            const {id} = req.params;
            const productData = req.body;
            const productUpdated = await ProductRepository.update(id, productData);

            if(!productUpdated){
                return res.status(404).json(
                    {
                        succes:false,
                        message: 'Produto não encontrado'
                    }
                )
            }

            res.status(200).json({
                success:true,
                message:"Produto atualizado com sucesso"
            })
        } catch (error) {
            
        }
    }

    async deleteProduct(req, res){
        try {
            const {id} = req.params;
            const deletedProduct = await ProductRepository.delete(id);
            if(!deletedProduct){
                return res.status(404).json(
                    {
                        succes:false,
                        message: 'Produto não encontrado'
                    }
                )
            }

            res.status(200).json({
                success:true,
                message:"Produto deletado com sucesso"
            })
        } catch (error) {
            res.status(500).json(
                {
                    succes:false,
                    message: 'erro ao deletar o produto'
                }
            )
        }
    }
}

module.exports = new ProductController();