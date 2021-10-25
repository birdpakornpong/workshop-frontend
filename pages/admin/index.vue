<template>
  <Panel isFluidVertical isContentTertiary isHeadingTertiary :heading="'Product Table'">
    <div class="home">
        <section style="padding: 0rem 0rem 2rem 0rem">
            <Button
                isColorBlue
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-add-circle-outline-white.svg'"
                  :onClick="onShowModal"
                >
                Add Product
            </Button>
        </section>
        <Modal :isShow="statusModal">
            <ModalHeader>
                <h1>Hello! Bird</h1>
            </ModalHeader>
            <ModalBody>
                <section>
                    <Form title="Form" :form="form" :onSubmit="onSubmit"></Form>
                </section>
            </ModalBody>
            <ModalFooter>
                <Button isColorOrange :onClick="onCloseModal">Cancel</Button>
                <Button isColorBlue :onClick="onSubmit">Confirm</Button>
            </ModalFooter>
        </Modal>
      <Table>
        <THead>
          <TR>
            <TH isSticky isNumber><TInfo isHeading>ID</TInfo></TH>
            <TH isSticky>
              <TInfo isHeading>Name</TInfo>
            </TH>
            <TH isSticky>
              <TInfo isHeading>Sku</TInfo>
            </TH>
            <TH isSticky>
              <TInfo isHeading>Description</TInfo>
            </TH>
            <TH isSticky>
              <TInfo isHeading>Status</TInfo>
            </TH>
            <TH isSticky>
              <TInfo isHeading>CreateAt</TInfo>
            </TH>
             <TH isSticky>
              <TInfo isHeading>Price</TInfo>
            </TH>
             <TH isSticky>
              <TInfo isHeading>Action</TInfo>
            </TH>
          </TR>
        </THead>
        <TBody>
          <TR v-for="user in userList" :key="user.id">
            <TD isNumber>
              <TInfo>{{ user.id }}</TInfo>
            </TD>
            <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
            <TD>
              <TInfo>{{ user.sku }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.description || "ยังไม่มีรายละเอียด" }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.status }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.createdAt }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.product_price && user.product_price.value || "ยังไม่กำหนดราคา" }}</TInfo>
            </TD>
            <TD isMoreDetailControl>
                <TOperations isButtonGroup>
                  <section @click="onEdit(user.id)">
                    <TOperations isViewDetail/>
                  </section>
                  <section @click="onDelete(user.id,user.product_price && user.product_price.id || null)">
                    <TOperations isDelete/>
                  </section>                                              
                </TOperations>
            </TD>
          </TR>
        </TBody>
      </Table>
    </div>
  </Panel>
</template>

<script>
import Components from '~/components/index.ts';

export default {
  components: {
    ...Components,
  },
  async fetch() {
    const { data } = await this.$services.product.getProductList();
    this.userList = data.sort(function (a, b) {
      return a.id - b.id;
    });
    console.log('this.userList', this.userList)
  },
  data() {
    return {
        statusModal: false,
        statusEdit: false,
        userList: [],
        form: {
            name: '',
            description: '',
            sku: "",
            status: "",
            product_price: {
              value: null,
              condition: ''
            }
        }
    };
  },
  methods: {
      async onDelete(id,idProductPrice) {
        try {
          if(idProductPrice) {
            await this.$services.product.deleteProductPrice(idProductPrice)
          }
          await this.$services.product.deleteProduct(id);
          window.location.reload();
        } catch (e) {
          console.log('error', e)
        }
      },
      onShowModal() {
        this.form = {
            name: '',
            description: '',
            sku: "",
            status: "",
            product_price: {
              value: null,
              condition: ''
            }
        }
        this.statusModal = true;
      },
      onCloseModal() {
          this.statusModal = false;
      },
      async onSubmit() {
        const statusNew = this.form.status === "1" ? "Active":"Inactive"
        const { status, ...data } = this.form
        const payload = {status: statusNew, ...data}
        console.log('payload',payload)
        try {
          if (this.statusEdit) {
            await this.$services.product.updateProduct(payload);
            await this.createOrUpdateProductPrice(this.form.id)
            this.statusModal = false;
            window.location.reload();
          } else {
            const { data } = await this.$services.product.createProduct(payload);
            await this.createOrUpdateProductPrice(data.id)
            this.statusModal = false;
            window.location.reload();
          }
         
        } catch (e) {
          console.log('error', e)
        }
        
      },
      async createOrUpdateProductPrice(id) {
        if (this.form.product_price.id) {
          const payloadProductPriceUpdate = {
              id: this.form.product_price.id,
              product_id: id,
              value: this.form.product_price.value,
              condition: this.form.product_price.condition,
          }
          await this.$services.product.updateProductPrice(payloadProductPriceUpdate);
        } else {
          const payloadProductPrice = {
              product_id: id,
              value: this.form.product_price.value,
              condition: this.form.product_price.condition
            }
          await this.$services.product.createProductPrice(payloadProductPrice);
        }
      },
      onEdit(id) {
        this.statusModal = true;
        this.statusEdit = true;
        const res = this.userList.find((product) => product.id === id)
        this.form.id = res.id
        this.form.name = res.name
        this.form.sku = res.sku
        this.form.status = res.status == "Active" ? "1":"2"
        this.form.product_price.id = res.product_price && res.product_price.id || null
        this.form.product_price.value = res.product_price && res.product_price.value || null
        this.form.product_price.condition = res.product_price && res.product_price.condition || null
        this.form.description = res.description || null
        console.log('res', res)
      }

  }
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.home {
  /* Parent style   ------------------------------ */
  /* Children style ------------------------------ */
  /* Other component style ----------------------- */
}
</style>
