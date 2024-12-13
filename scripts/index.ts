import dotenv from "dotenv"
import RivalzClient from "rivalz-client"
dotenv.config();
(async () => {
	//Create Knowledge Base
	const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN ?? "");
	//const knowledgeBase = await rivalzClient.createRagKnowledgeBase('./assets/sample.pdf', 'knowledge_base_name');
	//console.log(knowledgeBase);
	//await new Promise(resolve => setTimeout(resolve, 5000));
	//const knowledgeBaseStatus = await rivalzClient.getKnowledgeBase(knowledgeBase.id);
	//console.log(knowledgeBaseStatus.status);

	// RAG

	const knowledgeBaseRag = await rivalzClient.createRagKnowledgeBase('./assets/sample.pdf', 'knowledge_base_name');
	const knowledgeBaseId = knowledgeBaseRag.id;
	console.log(knowledgeBaseId)

	await new Promise(resolve => setTimeout(resolve, 5000));
	const conversation = await rivalzClient.createChatSession(knowledgeBaseId, "What is the document about?");
	console.log(`AI answer: ${conversation.answer}`)
})()
