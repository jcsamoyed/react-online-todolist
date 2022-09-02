import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { apiGetTodos, apiPostTodos, apiDeleteTodos, apiToggleTodos } from "@/utils/api";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');
  const [activePage, setActivePage] = useState('全部');

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

  const handleDeleteAllDone = () => {
    const doneList = todos.filter((item) => {
      return item.completed_at;
    })
    doneList.forEach((item) => {
      handleDeleteItem(item.id)
    })
  }

  const changeActiveList = (value) => {
    setActivePage(value);
  }

  const filterTodos = (activePage === '全部')
    ? todos
    : (activePage === '待完成')
      ? todos.filter(item => item.completed_at === null)
      : todos.filter(item => item.completed_at !== null)

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
            <div onClick={() => changeActiveList('全部')} className={"w-1/3 text-center font-bold py-4 border-b-2 cursor-pointer" + (activePage === '全部' ? 'text-black border-black' : ' text-gray-400 border-gray-100')}>全部</div>
            <div onClick={() => changeActiveList('待完成')} className={"w-1/3 text-center font-bold py-4 border-b-2 cursor-pointer" + (activePage === '待完成' ? 'text-black border-black' : ' text-gray-400 border-gray-100')}>待完成</div>
            <div onClick={() => changeActiveList('已完成')} className={"w-1/3 text-center font-bold py-4 border-b-2 cursor-pointer" + (activePage === '已完成' ? 'text-black border-black' : ' text-gray-400 border-gray-100')}>已完成</div>
          </div>
          {/* 列表 */}
          <div className="py-2 px-6">
            <ul>
              {
                filterTodos.map((item) => {
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
              <span>{todos.filter(item => item.completed_at === null).length} 個待完成項目</span>
              <div onClick={handleDeleteAllDone} className="text-gray-400 cursor-pointer">清除已完成項目</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList;