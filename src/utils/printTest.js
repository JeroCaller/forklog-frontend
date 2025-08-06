/**
 * 환경 변수 등을 콘솔에 출력하여 값을 확인하는 용도의 모듈
 * 
 * @author Jerocaller
 * @since Personal maintenance
 */
const printDotEnvVars = () => {
  const title = "Dot env 비민감정보 값 출력";

  console.log(`=== ${title} ===`);
  console.log("App base url (backend rest api root endpoint)");
  console.log(process.env.REACT_APP_API_BASE_URL);
  console.log("Public Url");
  console.log(process.env.PUBLIC_URL);
  console.log(`=== ${title} 끝 ===`);
}

export {printDotEnvVars}