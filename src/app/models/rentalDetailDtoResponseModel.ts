import { RentalDetailDto } from "./RentalDetailDto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDto[]
}