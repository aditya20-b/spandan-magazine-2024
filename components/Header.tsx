import { Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/utils/constants";

interface HeaderProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({
  selectedCategory,
  handleCategoryChange,
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  return (
    <header className="bg-black/50 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Spandan Magazine</h1>
      <nav className="flex justify-between items-center">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="default" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#300000] text-red-50">
            <SheetHeader>
              <SheetTitle className="text-red-50">Menu</SheetTitle>
              <SheetDescription className="text-red-200">
                Navigate through different sections of Spandan Magazine
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 flex flex-col space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => {
                    handleCategoryChange(category);
                    setIsSidebarOpen(false);
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "secondary" : "ghost"}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon">
          <Moon className="h-6 w-6" />
        </Button>
      </nav>
    </header>
  );
}