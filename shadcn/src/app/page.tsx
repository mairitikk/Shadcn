import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

interface Recipe{
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}
async function getRecepies(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')
  return result.json()
}

export default async function Home() {
  const recipes = await getRecepies()
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <Card key= {recipe.id}></Card>
        ))}
      </div>
    </main>
  )
}