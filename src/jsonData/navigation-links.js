export default function(currentUser){
	return [
		{
			name: 'Shop',
			link: 'shop'
		},
		{
			name: 'Contact',
			link: 'contact'
		},
		{
			name: currentUser ? 'Sign out' : 'Signin',
			link: currentUser ? '' : 'signin'
		}
	]
}