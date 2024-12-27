import React, { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      });
  }, []);

  const handleChange = (text) => {
    const query = text.target.value;
    setSearch(query);

    // Filter the data based on the search query
    const filtered = data.filter(item => 
      String(item.title).toLowerCase().includes(query.toLowerCase()) // Filter by title (case-insensitive)
    );
    setFilteredData(filtered); // Update the filtered data
  };

  return (
    <>
      <div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        flexDirection: 'column', 
        textAlign: 'center',
      }}
>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
          style={{
            border: 'solid',
            outline: 'none',
            width: '30%',
            padding: '10px',
            fontSize: '16px',
            margin:'10px',
            borderRadius:5,
          }}
        /> </div>
        <div style={{ marginLeft: 20 }}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} style={{ borderWidth: 1, borderColor: "red", padding: "10px", border:'dashed', margin:'10px' }}>
                <text>
                  <br />
                  {item.title}
                </text>
                <div>
                  <text style={{color:"gray"}}>
                  {item?.body}
                  </text>
                </div>
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
