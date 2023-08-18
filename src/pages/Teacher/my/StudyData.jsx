import StudyManage from "./StudyManage";
import { useMemo, useEffect, useState } from "react";
import axios from "axios";

export default function StudyData() {
    const [lists, setLists ] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://101.101.219.109:8080//teacher/1/studystatus`
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
              accessor: "student_id",
              Header: "번호",
            },
            {
              accessor: "student_name",
              Header: "이름",
            },
            ...lists[0].chapter_data.map((chapter) => ({
              accessor: `chapter_${chapter.chap_id}`,
              Header: `${chapter.chap_id}단계`
            })),
          ];
        },
        [lists]
      );
    
      const data = useMemo(
        () => {
          if (!lists) return []; // lists가 null일 때 빈 배열 반환
    
          return lists.student_list.map((list) => {
            const studentData = {
              student_id: list?.student_id,
              student_name: list?.student_name,
            };
            list.chapter_data.forEach((chapter) => {
              studentData[`chapter_${chapter.chap_id}`] = chapter.status;
            });
            return studentData;
          });
        },
        [lists]
      );
    
      return <StudyManage columns={columns} data={data} title={lists}/>;
    }
    