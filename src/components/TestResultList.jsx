// 테스트 결과 리스트를 보여줌
// visibility 변경 버튼과 삭제 버튼을 제공
// 본인 소유의 테스트만 공개 여부 변경과 테스트를 삭제 가능하도록 조건 설정

import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults"

const TestResultList = () => {

  const [testResults, setTestResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const date = new date();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await getTestResults();
      setTestResults(data);
    };
    console.log(fetchResults);
  }, [])

  useEffect(() => {
    // currentUser는 어디서 받아오지?
    const myTestResults = (currentUser) => {
      return testResults.filter((testResult) => testResult.UserId === currentUser.userId || testResult.visibility === true)
    }
    setFilteredResults(myTestResults());
  }, []);

  return (
    <div>
      <ul>
        {filteredResults.map((result) => {
          <li>
            <h2>{result.nickname}</h2>
            <span>{date}</span>
            <p></p>
            <button>{ }</button>
            <button>삭제</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default TestResultList