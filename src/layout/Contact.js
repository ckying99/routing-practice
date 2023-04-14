import react from 'react';
import {Button} from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea';
function Contact(){
   return(
    <div className='contact'>
        <div class="formgrid grid" style={{padding: '5%'}}>
            <div class="field col">
                <h2>Get in touch.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br/>
                <h3>alias@gmail.com</h3>
                <h3>(+xo) xo-xoxoxoxoxo</h3>
            </div>
            <div class="fied col" style={{paddingTop:'2%'}}>
            <div class="formgrid grid">
                <label class="field col-12">Name *</label>
                <div class="field col-12 md:col-6">
                    <label for="firstname5" class="p-sr-only">Firstname</label>
                    <input style={{width:'100%'}} id="firstname5" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Firstname"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="lastname5" class="p-sr-only">Lastname</label>
                    <input id="lastname5" style={{width:'100%'}} type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Lastname"/>
                </div>
                <div class="field col-12">
                    <label for="email">Email *</label>
                    <input id="email" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    placeholder="alias@domain.com"/>
                </div>
                <div class="field col-12">
                    <label for="subject">Subject *</label>
                    <input id="subject" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    placeholder="Asking about details about..."
                    />
                </div>
                <div class="field col-12">
                    <label for="message">Message *</label>
                    <br />
                    <InputTextarea  rows={5} cols={30} />
                </div>
            </div>
            
            <Button>Submit</Button>
            </div>
            </div>
            
    </div>
   )
}

export default Contact;