import {Module, Mutation, VuexModule} from 'vuex-module-decorators'

export interface UserInfo {
  id: string;
  name: string;
}

@Module({
  namespaced: true,
})
export default class UserModule extends VuexModule {
  userInfo!: UserInfo|null;

  @Mutation
  setUserInfo (userInfo: UserInfo|null) {
    this.userInfo = userInfo;
  }
}