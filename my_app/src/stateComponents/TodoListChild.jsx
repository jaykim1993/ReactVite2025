export const TodoChild = (props) => {
  return (
    <>
      <h1 style={{ marginBottom: "80px" }}>📋 To Do List</h1>
      <input
        type="text"
        placeholder="할일 추가"
        value={props.inputText}
        onKeyUp={props.EnterPress}
        onChange={props.AddText}
        style={{
          outline: "none",
          padding: "18px 50px",
          borderRadius: "5px",
          fontSize: "20px",
        }}
      />
      <button
        type="button"
        onClick={props.AddList}
        style={{
          width: "150px",
          height: "60px",
          fontSize: "18px",
          marginLeft: "90px",
          border: "1px solid black",
        }}
      >
        입력
      </button>
      {props.list.map((item, index) => (

          <button
            key={item.id}
            type="button"
            onClick={() => props.Done(index)}
            style={{margin:'60px 0', display:'flex', justifyContent:'space-around', width: "600px", height: "max-height", fontSize: "20px" }}
          >
            <h4
              style={{
              width: "150px",
              textDecoration: item.completed ? "line-through" : "none",
              color: item.completed ? "#888" : "black",
              }}
            >{item.text}
            </h4>
            <h2>{item.completed ? "🗹":"☐"}</h2>
          </button>

      ))}
    </>
  );
};
