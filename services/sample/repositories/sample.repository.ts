import { GetSampleDataDTO } from '../dto/get.sample.dto';
export class SampleRepository {
  private $axios: any;

  constructor($axios: any) {
    this.$axios = $axios;
  }

  async getSampleList(): Promise<GetSampleDataDTO> {
    const dataResult = await this.$axios.$get('/public/v1/users');
    return dataResult;
  }
}
