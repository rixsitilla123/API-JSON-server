import { Button, Input } from 'antd'
import React, { useState } from 'react'

function AddUsers() {
	const [name, setName] = useState("")
	const [surname, setSurname] = useState("")
	const [study, setStudy] = useState("")
	const [age, setAge] = useState("")
	const [img, setImg] = useState("")
	return (
		<form className='p-5'>
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-[22px]">Add Students</h2>
				<Button htmlType='submit' size='large' type='primary'>Save</Button>
			</div>
			<div className="flex justify-between mt-5">
				<div className="w-[49%] border-[2px] border-slate-500 rounded-[15px] p-2">
					<label className="fle flex-col">
						<span className="text-[18px]">Name</span>
						<Input className='mt-1' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Surname</span>
						<Input className='mt-1' value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Enter Surname' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Age</span>
						<Input className='mt-1' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' type='number' size='large' />
					</label>
					<label className="fle flex-col">
						<span className="text-[18px]">Study</span>
						<Input className='mt-1' value={study} onChange={(e) => setStudy(e.target.value)} placeholder='Enter Study' size='large' />
					</label>
				</div>
				<div className="w-[49%] border-[2px] border-slate-500 rounded-[15px] p-2">
					<label className="fle flex-col">
						<span className="text-[18px]">Name</span>
						<Input className='mt-1' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' size='large' />
					</label>
				</div>
			</div>
		</form>
	)
}

export default AddUsers