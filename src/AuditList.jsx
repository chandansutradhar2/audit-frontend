export function AuditList(props) {
  //  props.userName = "admin"; //props are readonly
  // props.counter = props.counter + 1;

  //not recommended way of updating props
  //you should not update props directly
  // props.auditRecords.push( {
  //   createdOn: new Date().toLocaleString(),
  //   action: "Login",
  //   description: "User logged in",
  //   cratedBy: "admin",
  // } );

  console.log(props);

  return (
    <div>
      <ol>
        {props.auditRecords && props.auditRecords.length > 0 ? (
          props.auditRecords.map((audit, index) => {
            return (
              <li key={index}>
                {audit.createdOn},{audit.action} , {audit.description}
                <button onClick={() => props.chandan(index)}>Remove</button>
              </li>
            );
          })
        ) : (
          <li>No Audit Records</li>
        )}
      </ol>
    </div>
  );
}
