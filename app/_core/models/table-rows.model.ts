export interface RequestsModel {
    id: string
    requestID: string
    requestApplicator: string
    requestServiceGroup: string
    requestPhoneNumber: string
    requestDate: string
    requestTimeRange: string
    requestStatus: string
}

export interface TransactionsModel {
    id: string
    transactionReferenceNo: string
    transactionTrackingNo: string
    transactionPortNameAndType: string
    transactionRequestCode: string
    transactionDepositDate: string
    transactionPaymentAmount: string
    transactionProvider: string
    transactionServiceGroup: string
}

export interface ServicesManagementModel {
    id: string
    serviceCode: string
    serviceGroup: string
    serviceType: string
    serviceProvider: string
    serviceTimeProvide: string
    serviceAmount: string
}

export interface UsersManagementModel {
    id: string
    userFullName: string
    userPhoneNumber: string
    userNationalID: string
    userStatus: string
    userGender: string
}

export interface UsersGroupModel {
    id: string
    groupName: string
    groupCode: string
    groupUsersCount: string
}

export interface ReportsModel {
    id: string
    reportID: string
}

export type TableRowsModel =
    | RequestsModel[]
    | TransactionsModel[]
    | ServicesManagementModel[]
    | UsersManagementModel[]
    | UsersGroupModel[]
    | ReportsModel[]

export type ColumIdModel =
    | keyof RequestsModel
    | keyof TransactionsModel
    | keyof ServicesManagementModel
    | keyof UsersManagementModel
    | keyof UsersGroupModel
    | keyof ReportsModel

export interface TableColumnModel {
    id: ColumIdModel
    label: string
    minWidth?: number
}



export interface addressProps {
    section: string,
    value: any,
    id: string,
}