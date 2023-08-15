import EvaluationManage from "./EvaluationManage";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function EvaluationData() {
  const navigate = useNavigate();
  const samples = useMemo(
      () => [
          {
              total_student: "20",
              complete_student: "20",
              class_id: 10000,
              chap_id: "1",
              youtube_url: "교내 휴대전화 허용 어디까지? " //제목가져오는건가?
          },
          {
              total_student: "20",
              complete_student: "12",
              class_id: 10000,
              chap_id: "2",
              youtube_url: "10대가 느끼는 ‘성차별’"
          },
          {
              total_student: "20",
              complete_student: "10",
              class_id: 10000,
              chap_id: "3",
              youtube_url: "동성애자, 좋은 사람 만날 수 있을까요?" 
          },
  ],
  []
);
  const columns = useMemo(
      () => [
        {
          accessor: "number",
          Header: "번호",
        },
        {
          accessor: "chap_id",
          Header: "단계"
          },
        {
          accessor: "URL",
          Header: "학습내용",
        },
        {
          accessor: "status",
          Header: "채점완료/정원",
          Cell: ({ value }) => (
            <span>
                <span style={{ color: value.split("/")[0] === value.split("/")[1] ? "green" : "red" }}>
                    {value.split("/")[0]}
                </span>
                /{value.split("/")[1]}
            </span>
        ),
        },
        {
          accessor: "btn",
          Header: "--------",
        }
      ],
      [samples]
    );

  const data = useMemo(
      () =>
          samples.map((sample, index) => {
              const EvaluationData = {
                  number: index + 1,
                  chap_id: sample.chap_id+"단계",
                  URL: sample.youtube_url,
                  status: sample.complete_student + "/" + sample.total_student, 
                  btn:<button 
                        onClick={() => {
                          navigate(`/teacher/${sample.class_id}/study/${sample.chap_id}`);
                          }
                        }
                        style={{ background: "none", padding: 0, cursor: "pointer",color: "black" }}
                      >채점하기</button>,
              };
              return EvaluationData;
          }),
      [samples]
  );

  
  return <EvaluationManage columns={columns} data={data} />;
}
