"use client"
import "./styles.css";

export default function ReqResBody({ Request, Response }) {
  console.log(Response);

  return (
    <div >
      <div className="req-res-div">
        <h4>Request</h4>
        {Request.param &&
          <>
            <h5>Path Parameters</h5>
            <div className="header-params">
              {Object.entries(Request.param).map(([key, value]) => (
                <>
                  <pre key={key} className="preWidth">{key}*:</pre>
                  <div>
                    <pre>{value[0]}</pre>
                    <p>{value[1]}</p>
                  </div>
                </>

              ))}
            </div>
            <hr />
          </>}


        {Request.header &&
          <>
            
            <h5>Header Parameters</h5>
            <div className="header-params">
              {Object.entries(Request.header).map(([key, value]) => (
                <>
                  <pre key={key} className="preWidth">{key}*:</pre>
                  <div>
                    <pre>{value[0]}</pre>
                    <p>{value[1]}</p>
                  </div>
                </>

              ))}
            </div>
            <hr />
          </>}


        {Request.body &&
          <>
            
            <h5>Request body schema</h5>
            <pre>{Request.body.type}</pre>
            <div >

              {Request.body.keyValue &&
                Request.body.keyValue.map((item, i) => {
                  const startIdx = item.length > 3 ? 3 : item.length;

                  return (
                    <div key={i} className="req-res-data">
                      <pre className="preWidth">{item[0]}:</pre>

                      <div>
                        <pre>{item[1]}</pre>
                        <p>{item[2]}</p>
                        {item.slice(startIdx).map((subItem, subIndex) => (
                          <div className="req-res-data" key={subIndex}>
                            <pre className="preWidth">{subItem[0]}:</pre>
                            <div>
                              <pre>{subItem[1]}</pre>
                            </div>
                          </div>
                        ))}

                      </div>

                    </div>
                  )

                })
              }

            </div>
          </>
        }
      </div>

      <div className="req-res-div">
        <h4>Response</h4>
        <h5>{Response.code}</h5>
        {Response.body &&
          <>
            <h5>Response body schema</h5>
            <pre>{Response.body.type}</pre>
            <div >

              {Response.body.keyValue &&
                Response.body.keyValue.map((item, i) => {
                  const startIdx = item.length > 3 ? 3 : item.length;

                  return (
                    <div key={i} className="req-res-data">

                      <pre className="preWidth">{item[0]}:</pre>
                      <div >
                        <pre>{item[1]}</pre>
                        <p>{item[2]}</p>
                        {item.slice(startIdx).map((subItem, subIndex) => (
                          <div className="req-res-data" key={subIndex}>
                            <pre className="preWidth">{subItem[0]}:</pre>
                            <div>
                              <pre>{subItem[1]}</pre>
                            </div>
                          </div>
                        ))}

                      </div>

                    </div>
                  )

                })
              }

            </div>
          </>
        }
      </div>
    </div>
  )
}