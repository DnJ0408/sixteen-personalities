import axios from 'axios';
const domain = "http://localhost:5000";
const resource = "testResults"
const API_URL = `${domain}/${resource}`

export const getTestResults = async () => {
  // 테스트 결과를 요청하고 response에 담는다.
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, visibility)
  return response.data;
};