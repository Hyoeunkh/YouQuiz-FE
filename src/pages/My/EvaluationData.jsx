import EvaluationManage from "./EvaluationManage";
import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EvaluationData() {
  const navigate = useNavigate();
  const [lists, setLists ] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/evaluation_status`
          );
          setLists(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }, []);

  const columns = useMemo(
    () => {
      if (!lists) return []; // lists가 null일 때 빈 배열 반환

      return [
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
      ];
    }, [lists]);

  const data = useMemo(
    () => {
      if (!lists) return []; // lists가 null일 때 빈 배열 반환

      return  lists.map((list, index) => {
              const EvaluationData = {
                  number: index + 1,
                  chap_id: list.chap_id+"단계",
                  URL: list.youtube_url,
                  status: list.complete_student + "/" + list.total_student, 
                  btn:<button 
                        onClick={() => {
                          navigate(`/teacher/${list.class_id}/study/${list.chap_id}`);
                          }
                        }
                        style={{ background: "none", padding: 0, cursor: "pointer",color: "black" }}
                      >채점하기</button>,
              };
              return EvaluationData;
          });
        }, [lists]);

  
  return <EvaluationManage columns={columns} data={data} />;
}
