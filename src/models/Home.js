import { Record, Map } from 'immutable';

const HomeData = Record({
  homes: new Map(),
  total: 0,
  currentPage: 0,
  totalPages: 0,
  // all the current homes in the current page
  currentHomes: new Map(),
  currentCount: 0,
  fetching: true,
  fetchErrorMessage: '',
  fetchStatus: 200,
});

export default HomeData;

// case LOAD_NEW_PAGE:
//    //Clone the previous state
//    let loadNewPageState = Object.assign({}, state);
//    //How many pages should be added. Will always be 1 or -1
//    let addPages = action.payload.page;
//    //add it to the current
//    loadNewPageState.currentPage += addPages;

//    let perPage = loadNewPageState.countPerPage; //20 by default

//    let nextProducts;
//    if (addPages === 1){
//        //Moving from page 1 to 2 will cause ‘upperCount’ to be 40
//        let upperCount = loadNewPageState.currentCount + perPage;
//        let lowerCount = loadNewPageState.currentCount; //This hasn’t been changed. It will remain 20.
//        //Now, we change the currentCount to match ‘upperCount.’ It’ll be used as such
//        //at any point after this line
//        loadNewPageState.currentCount += loadNewPageState.countPerPage;
//        //Only retrieve products within the (20,40) range (for page 2)
//        //Also, notice that we use ‘products’ rather than ‘filteredProducts.’ This is by design.
//        //Using the latter would result in an empty array because we only have 20 documents there when
//        //the page first loads.
//        nextProducts = loadNewPageState.products.slice(lowerCount, upperCount);
//    }

//    if (addPages ===-1){
//        //’currentCount’ has changed roles. Now it serves as the upperCount.
//        let upperCount = loadNewPageState.currentCount; //40
//        let lowerCount = loadNewPageState.currentCount - perPage; //20
//        //Then it’s reset. This way, the first if statement will always treat it as the ‘upperCount’
//        loadNewPageState.currentCount = lowerCount;
//        nextProducts = loadNewPageState.products.slice(lowerCount - perPage, upperCount - perPage);
//    }

//    loadNewPageState.filteredProducts = nextProducts;
//    window.history.pushState({page: 1}, "title 1", `?page=${loadNewPageState.currentPage}`);
//    return loadNewPageState;
