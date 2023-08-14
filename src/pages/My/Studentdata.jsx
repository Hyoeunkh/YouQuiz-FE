import StudentManage from "./StudentManage";
import { useMemo } from "react";

export default function Studentdata() {
    const samples = useMemo(
        () => [
        {
            student_name: "A",
            chapter_data: [ 
                {
                    chap_id: "1",
                    status: "O"
                },
                {
                    chap_id: "2",
                    status: "O"
                },
                {
                    chap_id: "3",
                    status: "O"
                },
                {
                    chap_id: "4",
                    status: "O"
                },
                {
                    chap_id: "5",
                    status: "O"
                },{
                    chap_id: "6",
                    status: "O"
                },{
                    chap_id: "7",
                    status: "O"
                },
                {
                    chap_id: "8",
                    status: "O"
                },
                {
                    chap_id: "9",
                    status: "O"
                },
            ],
            student_id: "1",
        },
        {
            student_name: "B",
            chapter_data: [ 
                {
                    chap_id: "1",
                    status: "O"
                },
                {
                    chap_id: "2",
                    status: "O"
                },
                {
                    chap_id: "3",
                    status: "X"
                }
            ],
            student_id: "2",
        
        },{
            student_name: "B",
            chapter_data: [ 
                {
                    chap_id: "1",
                    status: "O"
                },
                {
                    chap_id: "2",
                    status: "O"
                },
                {
                    chap_id: "3",
                    status: "X"
                }
            ],
            student_id: "2",
        
        },{
            student_name: "B",
            chapter_data: [ 
                {
                    chap_id: "1",
                    status: "O"
                },
                {
                    chap_id: "2",
                    status: "O"
                },
                {
                    chap_id: "3",
                    status: "X"
                }
            ],
            student_id: "2",
        
        },
    ],
    []
);
    const columns = useMemo(
        () => [
          {
            accessor: "student_id",
            Header: "번호",
          },
          {
            accessor: "student_name",
            Header: "이름",
          },
            ...samples[0].chapter_data.map((chapter) => ({
                accessor: `chapter_${chapter.chap_id}`,
                Header: `${chapter.chap_id}단계`
          })),
        ],
        [samples]
      );
  
    const data = useMemo(
        () =>
            samples.map((sample) => {
                const studentData = {
                    student_id: sample.student_id,
                    student_name: sample.student_name,
                };
                sample.chapter_data.forEach((chapter) => {
                    studentData[`chapter_${chapter.chap_id}`] = chapter.status;
                });
                return studentData;
            }),
        [samples]
    );

    
    return <StudentManage columns={columns} data={data} />;
}
