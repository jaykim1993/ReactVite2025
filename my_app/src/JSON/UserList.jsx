export default function UserList({data}) {

  return (
    <>
      <ul>
            {data.map((data)=>(
                <li key={data.id}>{data.name}</li>
            ))}
      </ul>
    </>
  );
}
