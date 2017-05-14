import FrameTask from './FrameTask'

export default class FrameLoop {
  constructor () {
    this._tasks = new Map()
    this._running = false
    this._handle = null
  }

  add (task) {
    this._tasks.set(task.getId(), task)
    if (!this._running) {
      this._start()
    }
  }

  getTask (id) {
    var ret = null
    if (id) {
      ret = this._tasks.get(id)
    }
    return ret || new FrameTask(this)
  }

  _start () {
    this._handle = window.requestAnimationFrame(() => {
      this._tasks.forEach((value, key) => {
        value.exec()
        this._tasks.delete(key)
      })
      this._running = false
    })
    this._running = true
  }
}
