exports.user = {
    id: [],
    firstName: [
        {
            rule: '^undefined$',
            followed: false,
            errorMessage: 'firstName is not set'
        },
        {
            rule: '[\\w]{3,}',
            followed: true,
            errorMessage: 'firstName is too short (use more than 3 symbols)'
        },
        {
            rule: '^[\\w]{1,20}$',
            followed: true,
            errorMessage: 'firstName is too long (use no more than 20 symbols)'
        },
    ],
    lastName: [
        {
            rule: '^undefined$',
            followed: false,
            errorMessage: 'lastName is not set'
        },
        {
            rule: '[\\w]{3,}',
            followed: true,
            errorMessage: 'lastName is too short (use more than 3 symbols)'
        },
        {
            rule: '^[\\w]{1,20}$',
            followed: true,
            errorMessage: 'lastName is too long (use no more than 20 symbols)'
        },
    ],
    email: [
        {
            rule: '^undefined$',
            followed: false,
            errorMessage: 'email is not set'
        },{
            rule: '[\\w]+@gmail.com$',
            followed: true,
            errorMessage: 'email should be registered at gmail.com'
        }
    ],
    phoneNumber: [
        {
            rule: '^undefined$',
            followed: false,
            errorMessage: 'phoneNumber is not set'
        },{
            rule: '^380[\\d]{9}$', // TODO: resolve starting + at request parameter issue
            followed: true,
            errorMessage: 'phoneNumber should be in format 380xxxxxxxxx' // simplify format to fix it later
        }
    ],
    password: [
        {
            rule: '^undefined$',
            followed: false,
            errorMessage: 'password is not set'
        },
        {
            rule: '[\\w]{3,}',
            followed: true,
            errorMessage: 'password is too short (use more than 3 symbols)'
        },
    ]
}