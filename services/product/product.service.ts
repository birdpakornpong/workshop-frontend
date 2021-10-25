import { ProductBackstage } from './backstages/product.backstage';
import { ProductRepository } from './repositories/product.repository';
import { GetProductDTO } from '~/services/product/dto/get.product.dto';
import { ResponseDTO } from '../common/dto/response.dto';
import { RequestDTO } from '../common/dto/request.dto';

export class ProductService extends ProductBackstage {
  private productRepository = new ProductRepository(this.$axios);

  async getProductList(): Promise<GetProductDTO> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.productRepository.getProductList();
    } catch (err) {
      dataResult.message = 'failed';
      console.log(err, ProductService.name);
    }

    return dataResult;
  }

  async deleteProduct(id: string): Promise<GetProductDTO> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.productRepository.deleteProduct(id);
    } catch (err) {
      dataResult.message = 'failed';
      console.log(err, ProductService.name);
    }

    return dataResult;
  }

  async createProduct(requests: RequestDTO): Promise<ResponseDTO> {
    let responseListDTO: any = new ResponseDTO();
    try {
      responseListDTO = await this.productRepository.createProduct(requests);
    } catch (err: any) {
      responseListDTO.message = 'failed';
      console.log(err, err.stack, ProductService.name);
    }
    return responseListDTO;
  }

  async updateProduct(requests: RequestDTO): Promise<ResponseDTO> {
    let responseListDTO: any = new ResponseDTO();
    try {
      responseListDTO = await this.productRepository.updateProduct(requests);
    } catch (err: any) {
      responseListDTO.message = 'failed';
      console.log(err, err.stack, ProductService.name);
    }
    return responseListDTO;
  }

  async createProductPrice(requests: RequestDTO): Promise<ResponseDTO> {
    let responseListDTO: any = new ResponseDTO();
    try {
      responseListDTO = await this.productRepository.createProductPrice(
        requests,
      );
    } catch (err: any) {
      responseListDTO.message = 'failed';
      console.log(err, err.stack, ProductService.name);
    }
    return responseListDTO;
  }

  async updateProductPrice(requests: RequestDTO): Promise<ResponseDTO> {
    let responseListDTO: any = new ResponseDTO();
    try {
      responseListDTO = await this.productRepository.updateProductPrice(
        requests,
      );
    } catch (err: any) {
      responseListDTO.message = 'failed';
      console.log(err, err.stack, ProductService.name);
    }
    return responseListDTO;
  }

  async deleteProductPrice(id: string): Promise<GetProductDTO> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.productRepository.deleteProductPrice(id);
    } catch (err) {
      dataResult.message = 'failed';
      console.log(err, ProductService.name);
    }

    return dataResult;
  }
}
