import { useEffect, useState } from "react"

import api from "../../services/api"

import { Button } from "../../components/Button"
import { DeleteModal } from "../../components/DeleteModal"
import { Load } from "../../components/Load"

import { LessonDTO } from "../../dtos/LessonDTO"
import { DAYS } from "../../dtos/DAYSDTO"

import { useLocation, useNavigate } from "react-router-dom"

import {
	Container,
	Header,
	LoadContainer,
	Content,
	Obs,
	LabelCheckbox,
	Checkbox,
	ButtonArea,
} from "./styles"

export function Details() {
	const [lesson, setLesson] = useState<LessonDTO>()
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [loading, setLoading] = useState(true)

	const navigate = useNavigate()

	const { state } = useLocation()
	const id = state

	function handleIsDeleteModalOpen() {
		setIsDeleteModalOpen(true)
	}
	function handleIsDeleteModalClose() {
		setIsDeleteModalOpen(false)
	}

	function handleBackToHome() {
		navigate("/")
	}

	function handleEditLesson() {
		navigate("/edit", { state: id })
	}

	async function handleDeleteLesson() {
		handleIsDeleteModalClose()
		setLoading(true)

		try {
			await api.delete(`/Lessons/${id}`)
			navigate("/")
		} catch (error) {
			console.log(
				"Screen: Details\nFunction: handleDeleteLesson\nerror:",
				error
			)
			alert("Não foi possível remover o registro!")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		async function handleGetLesson() {
			try {
				const response = await api.get(`/Lessons/${id}`)

				console.log(response)

				let temp = []
				temp.push({
					...DAYS[0],
					checked: response.data.monday === "S" ? true : false,
				})
				temp.push({
					...DAYS[1],
					checked: response.data.tuesday === "S" ? true : false,
				})
				temp.push({
					...DAYS[2],
					checked: response.data.wednesday === "S" ? true : false,
				})
				temp.push({
					...DAYS[3],
					checked: response.data.thursday === "S" ? true : false,
				})
				temp.push({
					...DAYS[4],
					checked: response.data.friday === "S" ? true : false,
				})
				temp.push({
					...DAYS[5],
					checked: response.data.saturday === "S" ? true : false,
				})
				temp.push({
					...DAYS[6],
					checked: response.data.sunday === "S" ? true : false,
				})

				setLesson({ ...response.data, days: temp })
			} catch (error) {
				console.log("Screen: Details\nFunction: handleGetLesson\nerror:", error)
				alert("Não foi possível carregar os dados da Matéria!")
			} finally {
				setLoading(false)
			}
		}

		handleGetLesson()
	}, [id])

	return (
		<Container>
			<Header>
				<Button title="Home" onClick={handleBackToHome} />

				<h1>{lesson?.lesson}</h1>
			</Header>

			<hr />

			{loading ? (
				<LoadContainer>
					{" "}
					<Load title="Carregando..." />{" "}
				</LoadContainer>
			) : (
				<Content>
					<Obs value={lesson?.obs} disabled />

					{lesson?.days.map((item) => (
						<LabelCheckbox key={item.id}>
							<Checkbox
								type="checkbox"
								key={item.id}
								checked={item.checked}
								readOnly
							/>

							{item.ptName}
						</LabelCheckbox>
					))}
				</Content>
			)}

			<hr />

			<ButtonArea>
				<Button title="Editar" color="" onClick={handleEditLesson} />

				<Button
					title="Excluir"
					color="#5429CC"
					onClick={handleIsDeleteModalOpen}
				/>
			</ButtonArea>

			<DeleteModal
				isOpen={isDeleteModalOpen}
				onRequestClose={handleIsDeleteModalClose}
				handleDelete={handleDeleteLesson}
			/>
		</Container>
	)
}
