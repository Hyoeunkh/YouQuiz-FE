import EvaluationManage from "./EvaluationManage";
import { useMemo } from "react";

export default function EvaluationData() {
    const samples = useMemo(
        () => [
            {
                total_student: "20",
                complete_student: "20",
                chap_id: "1",
                youtube_url: "교내 휴대전화 허용 어디까지? " //제목가져오는건가?
            },
            {
                total_student: "20",
                complete_student: "12",
                chap_id: "2",
                youtube_url: "10대가 느끼는 ‘성차별’"
            },
            {
                total_student: "20",
                complete_student: "10",
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
                    status: `${sample.complete_student}/${sample.total_student}`,
                    btn: "채점하기",
                };
                return EvaluationData;
            }),
        [samples]
    );

    
    return <EvaluationManage columns={columns} data={data} />;
}
