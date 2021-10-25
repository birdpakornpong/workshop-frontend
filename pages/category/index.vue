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
      <Table isStripes>
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
              <TInfo>{{ user.email }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
             <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
            <TD isMoreDetailControl class="is-actions">
                <TOperations isButtonGroup>
                    <TOperations isViewDetail :onClick="onShowModal" />
                    <TOperations isDelete :onClick="() => {}" />
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
    this.userList = data
    console.log('this.userList', this.userList)
  },
  data() {
    return {
        statusModal: false,
        userList: [],
        form: {
            name: ''
        }
    };
  },
  methods: {
      onShowModal() {
          this.statusModal = true;
      },
      onCloseModal() {
          this.statusModal = false;
      },
      onSubmit() {
          console.log('this.form', this.form)
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
