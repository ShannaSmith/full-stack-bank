const AccountDataTable =({ data }) => {
    return (
        <>
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
                       
        </tr>
        </>
      );
}

export default  AccountDataTable;