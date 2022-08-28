import Navbar from "@/components/Navbar";

function TodoList() {
  return (
    <div className="bg-half min-h-screen px-8">
      <Navbar />
      <div className="mt-4 sm:mt-10 w-full max-w-[500px] mx-auto">
        {/* 輸入框 */}
        <div className="relative mb-4 shadow-lg">
          <input className="w-full rounded py-3 px-4" placeholder="新增待辦事項" />
          <div className="absolute right-1 top-1 bg-black p-[10px] rounded cursor-pointer">
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
              <li className="group relative border-b border-gray-100">
                <label className="flex items-center py-4 cursor-pointer">
                  <input className="mr-4 w-5 h-5" type="checkbox" />
                  <span>倒垃圾</span>
                </label>
                <img src={require('@/assets/images/delete.png')} alt="x" className="hidden absolute group-hover:block right-0 top-5 cursor-pointer" />
              </li>
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