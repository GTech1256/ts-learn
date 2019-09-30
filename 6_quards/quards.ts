function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed() // number
  }

  return x.trim() // string
}


class MyResponse {
  header: 'response header'
  result: 'response result'
}

class MyError {
  header: 'error header'
  message: 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result // MyResponse
    }
  }

  return {
    info: res.header + res.message // MyError
  }
}


// -=+=-

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')