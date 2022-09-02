import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { apiGetTodos, apiPostTodos, apiDeleteTodos, apiToggleTodos } from "@/utils/api";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');

  const renderTodos = () => {
    apiGetTodos().then((res) => {
      const response = res.data.todos;
      setTodos(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    renderTodos();
  }, [])

  const handleSetTodos = () => {
    const todo = { content }
    if (content) {
      apiPostTodos(todo).then((res) => {
        renderTodos();
        setContent('');
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  const handleToggleItem = (id) => {
    apiToggleTodos(id)
      .then((res) => {
        renderTodos();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDeleteItem = (id) => {
    apiDeleteTodos(id)
      .then((res) => {
        renderTodos();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="bg-half min-h-screen px-8">
      <Navbar />
      <div className="mt-4 sm:mt-10 w-full max-w-[500px] mx-auto">
        {/* 輸入框 */}
        <div className="relative mb-4 shadow-lg">
          <input value={content} onChange={e => setContent(e.target.value)} className="w-full rounded py-3 px-4" placeholder="新增待辦事項" />
          <div onClick={handleSetTodos} className="absolute right-1 top-1 bg-black p-[10px] rounded cursor-pointer">
            <img src={require('@/assets/images/plus.png')} alt="+" />
          </div>
        </div>
        {/* 代辦清單 */}
        <div className="bg-white rounded text-sm shadow-lg">
          {/* 狀態頁籤 */}
          <div className="flex justify-between">
            <div className="w-1/3 text-center font-bold text-black py-4 border-b-2 border-black cursor-pointer">全部</div>
            <div className="w-1/3 text-center font-bold text-gray-400 py-4 border-b-2 border-gray-100 cursor-pointer">待完成</div>
            <div className="w-1/3 text-center font-bold text-gray-400 py-4 border-b-2 border-gray-100 cursor-pointer">已完成</div>
          </div>
          {/* 列表 */}
          <div className="py-2 px-6">
            <ul>
              {
                todos.map((item) => {
                  return (
                    <li key={item.id} className="group relative border-b border-gray-100">
                      <label className="flex items-center py-4 cursor-pointer">
                        <input className="mr-4 w-5 h-5" type="checkbox" defaultChecked={item.completed_at} onChange={() => handleToggleItem(item.id)} />
                        <span className={item.completed_at ? 'text-gray-400 line-through' : ''}>{item.content}</span>
                      </label>
                      <img src={require('@/assets/images/delete.png')} alt="x" onClick={() => handleDeleteItem(item.id)} className="hidden absolute group-hover:block right-0 top-5 cursor-pointer" />
                    </li>
                  )
                })
              }
            </ul>
            {/* 表尾 */}
            <div className="flex justify-between py-4">
              <span>5 個待完成項目</span>
              <div className="text-gray-400 cursor-pointer">清除已完成項目</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList;