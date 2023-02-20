const Book = (props) => {
  const {img,title,author} = props.book;
  // attribute and eventHandler
  const clickHandler = ()=>{
    console.log("hello world")
  };
  const complexExample = (author)=>{
    console.log("author")
  }
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title)
    }}>
      <img src={img} alt="" />
      <h1 onClick={()=>{alert("inline props")}} onMouseOver={clickHandler}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Refrence example</button>
      <button type="button" onClick={()=>complexExample(author)}>More complex example</button>
    </article>
  );
};
 export default Book