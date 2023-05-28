import React from 'react'
import './Images.css'
import Image from '../image/Image'
import Form from '../form/Form';
import memeImages, { MemeImage } from '../../meme_image_data'

// types
type ImagesState = {
	selectedImage: string;
}

class Images extends React.Component<{},ImagesState> {
	constructor(props: {})	{
	super(props)
	this.state = {
		selectedImage: ""
		}
	}

	render = ()	=>	{
		const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => <Image key={image.id} id={image.id} path={image.path} alt={image.alt} />)

		return (
			<div className="image-container">
				<Form />
				{memeButtons}
			</div>
		)
	}
}

export default Images;

// // types 
// type AppState = {
//   selectedImage: string
// }
// interface FormProps {
//   selectedImage: string
// }

// class App extends React.Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props)
//     this.state = {
//       selectedImage: ""
//     }
//   }

//   render = (FormProps) =>  {
//     return (
//       <div className="App">
//         <Header />
//         <Form selectedImage={FormProps}/>
//         <Route exact path="/" component={Images} />
//         <Route exact path="/savedmemes" render={() => <SavedMemes />} />
//       </div>
//     );
//   }
// }


//if meme button is clicked, render </Form>