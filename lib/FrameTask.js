export default class FrameTask {
  constructor (frameLoop) {
    this._id = `task_${++FrameTask.id}`
    this._frameLoop = frameLoop
    this._fn = null
  }

  update (callback) {
    this._fn = callback
    this._frameLoop.add(this)
  }

  exec () {
    this._fn && this._fn()
  }

  getId () {
    return this._id
  }
}

FrameTask.id = 0
