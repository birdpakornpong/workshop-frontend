import { RequestDTO } from '~/services/common/dto/request.dto';
import { GetProductDataDTO } from '../dto/get.product.dto';
export class ProductRepository {
  private $axios: any;

  constructor($axios: any) {
    this.$axios = $axios;
  }

  async getProductList(): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$get('/products/search');
    return dataResult;
  }

  async deleteProduct(id: string): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$delete(`/products/delete/${id}`);
    return dataResult;
  }

  async createProduct(requests: RequestDTO): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$post(`/products/create`, {
      data: { ...requests },
    });
    return dataResult;
  }

  async updateProduct(requests: RequestDTO): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$put(`/products/update`, {
      data: { ...requests },
    });
    return dataResult;
  }

  async createProductPrice(requests: RequestDTO): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$post(`/product-price/create`, {
      data: { ...requests },
    });
    return dataResult;
  }

  async updateProductPrice(requests: RequestDTO): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$put(`/product-price/update`, {
      data: { ...requests },
    });
    return dataResult;
  }

  async deleteProductPrice(id: string): Promise<GetProductDataDTO> {
    const dataResult = await this.$axios.$delete(`/product-price/delete/${id}`);
    return dataResult;
  }
}
