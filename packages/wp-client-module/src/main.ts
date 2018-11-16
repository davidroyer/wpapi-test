import { logAxios } from "@wpapi-js/wp-client";

export function cli() {
  logAxios();
  console.log('NEW4!')
  return Promise.resolve(true);
}
