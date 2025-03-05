import modalReducer, { closeModal, MODALS_TYPE, openAddModal, openDeleteModal, openEditModal } from "./modalSlice";

const testUser = {
    id: '-1',
    firstName: 'testName',
    lastName: 'testLastName',
    createDate: new Date('1980-01-01'),
    changeDate: new Date('1980-01-01'),
    links: [{type: 'tel', text: 'tesxLink'}],
}

describe('modalSlice', () => {
    it('should handle openAddModal', () => {
        const initialState = {isOpen: false}
        const action = openAddModal()
        const newState = modalReducer(initialState, action)

        expect(newState).toEqual({
            isOpen: true, 
            modalType: MODALS_TYPE.ADD
        })
    }),

    it('should handle openEditModal', () => {
        const initialState = {isOpen: false}
        const action = openEditModal(testUser)
        const newState = modalReducer(initialState, action)

        expect(newState).toEqual({
            isOpen: true, 
            modalType: MODALS_TYPE.CHANGE,
            user: testUser
        })
    }),
    it('should handle openDeleteModal', () => {
        const initialState = {isOpen: false}
        const user = testUser
        const action = openDeleteModal(user)
        const newState = modalReducer(initialState, action)
        expect(newState).toEqual({
            isOpen: true,
            user: testUser,
            modalType: MODALS_TYPE.DELETE
        })
    })
    ,

    it('should handle closeModal', () => {
        const initialState = {isOpen: true}
        const action = closeModal()
        const newState = modalReducer(initialState, action)

        expect(newState.isOpen).toEqual(false)
    })
})