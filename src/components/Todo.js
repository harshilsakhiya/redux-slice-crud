import React, { useState } from "react";
import { addTodo, delateTodo, updateTodo } from "../Redux/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Todo() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState("");
  const todoData = useSelector((state) => state.todo.Data);

  const addList = () => {
    dispatch(addTodo({ id: todoData.length + 1, List: todo }));
    setTodo("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center col-6 ">
        <input
          type="text"
          className="form-control m-3 "
          placeholder="Add To Item"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className="btn btn-outline-primary" onClick={addList}>
          Add
        </button>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>list</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.List}</td>
                    <td>
                      {edit && id === item.id && (
                        <div className="col-2 d-flax">
                          <input
                            type="text"
                            className="form-control   col-2"
                            placeholder="update Item"
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                          />
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              dispatch(updateTodo({ id: id, List: update }));
                              setEdit(false);
                              setUpdate("")
                            }}
                          >
                            update
                          </button>
                        </div>
                      )}
                      {edit === false && (
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            setEdit(true);
                            setId(item?.id);
                          }}
                        >
                          edit
                        </button>
                      )}
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => dispatch(delateTodo(item.id))}
                      >
                        delate
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
