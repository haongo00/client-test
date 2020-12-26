import AccountResponseDto from "../../../api/admin/authenticate/dto/accountResponse";
import { LocalStorageService } from "../../localStorage";
import { ActionUser, IActionUser } from "./action";
import { AccountDto } from "../../../api/user/user/dto";
import { UserApi } from "../../../api/user/user";
import { AuthApi } from "../../../api/admin/authenticate";

const initialState = {
  token: "",
  account: {} as AccountDto,
} as AccountResponseDto;
export const UserReducer = (state = initialState, action: {}) => {
  let actionEmit = action as IActionUser;
  switch ((actionEmit as IActionUser).type) {
    case ActionUser.UserLoginSave: {
      let newState = { ...state };
      LocalStorageService.save({
        key: "token",
        data: actionEmit.payload.token,
      });
      newState = { ...state, account: actionEmit.payload.account };
      return newState;
    }
    case ActionUser.UserLogOut:
      LocalStorageService.remove("token");
      AuthApi.logout();
      return {};
    default:
      return state;
  }
};
