export class GetProductDataListDTO {
  id: number = 0;
  name: string = '';
  email: string = '';
}

export class GetProductDataMetaDTO {
  limit: number = 0;
  page: number = 0;
  pages: number = 0;
  total: number = 0;
}

export class GetProductDataDTO {
  data: GetProductDataListDTO[] = [];
  meta: GetProductDataMetaDTO = new GetProductDataMetaDTO();
}

export class GetProductDTO {
  result: GetProductDataDTO = new GetProductDataDTO();
  message: string = '';
}
