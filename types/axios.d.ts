export interface UploadFileParams {
  name?: string;
  file: Blob;
}

export type Result<T = any> = {
  code: number;
  type?: 'success' | 'danger';
  message: string;
  data: T;
};
export interface RequestOptions {
  joinParamsToUrl?: boolean;
  formatDate?: boolean;
  isTransformResponse?: boolean;
  isReturnNativeResponse?: boolean;
  joinPrefix?: boolean;
  apiUrl?: string;
  urlPrefix?: string;
  // errorMessageMode?: ErrorMessageMode;
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  withToken?: boolean;
}
