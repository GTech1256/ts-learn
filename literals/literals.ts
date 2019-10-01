type FetchAction = {
  type: 'fetch'
} 

type SuccessAction = {
  type: 'success'
  payload: string
} 

type Action = FetchAction | SuccessAction;

function reducer(action: Action) {
  switch (action.type) {
    case 'fetch':
      return action // action: FetchAction
    case 'success':
      return action // action: SuccessAction
    // case 'error': // Type '"error"' is not comparable to type '"fetch" | "success"'
    //     return new throw Error(action)
  }

  const exhaustiveCheck: never = action;
}