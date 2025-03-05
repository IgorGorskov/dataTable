import { ORDERS } from "store/types"
import userReducer ,{ addUser, SORT_TYPE } from "./usersSlice"

const testUser = {
    id: '-1',
    firstName: 'testName',
    lastName: 'testLastName',
    createDate: new Date('1980-01-01'),
    changeDate: new Date('1980-01-01'),
    links: [{type: 'tel', text: 'tesxLink'}],
}

describe('userSlice', () => {
    it('should handle addUser', () => {
        const initialState = {
            userList: [],
            filteredList: [],
            sortOrder: ORDERS.DESC,
            currentSort: SORT_TYPE.ID
        }
        const action = addUser(testUser)
        const newState = userReducer(initialState, action)
        expect(JSON.stringify(newState.filteredList)).toEqual(JSON.stringify([testUser]))
        expect(JSON.stringify(newState.userList)).toEqual(JSON.stringify([testUser]))
    }),
    it('should handle addUser', () => {
        const initialState = {
            userList: [],
            filteredList: [],
            sortOrder: ORDERS.DESC,
            currentSort: SORT_TYPE.ID
        }
        const action = addUser(testUser)
        const newState = userReducer(initialState, action)
        expect(JSON.stringify(newState.filteredList)).toEqual(JSON.stringify([testUser]))
        expect(JSON.stringify(newState.userList)).toEqual(JSON.stringify([testUser]))
    })
})