
import { DatePicker } from "@/components/date-picker"
import {
  Sidebar,
  SidebarContent
} from "@/components/ui/sidebar"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
     
      <SidebarContent>
        <DatePicker />
        <div class="max-w-xs p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Filtres</h2>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">Types</h3>
            <div class="flex items-center">
              <input type="checkbox" id="cours" class="form-checkbox" />
              <label for="cours" class="ml-2">Cours</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="examens" class="form-checkbox" checked />
              <label for="examens" class="ml-2 bg-purple-200 p-1 rounded">Examens</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="devoirs" class="form-checkbox" />
              <label for="devoirs" class="ml-2 bg-gray-200 p-1 rounded">Devoirs</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="evenements" class="form-checkbox" />
              <label for="evenements" class="ml-2">Événements</label>
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">Formations</h3>
            <div class="flex items-center">
              <input type="checkbox" id="maths" class="form-checkbox" />
              <label for="maths" class="ml-2">Maths</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="physique" class="form-checkbox" checked />
              <label for="physique" class="ml-2 text-blue-500">Physique</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="economie" class="form-checkbox" />
              <label for="economie" class="ml-2">Économie</label>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold">Période</h3>
            <div class="flex items-center">
              <input type="checkbox" id="cours_periode" class="form-checkbox" />
              <label for="cours_periode" class="ml-2 bg-pink-200 p-1 rounded">Cours</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="conges" class="form-checkbox" checked />
              <label for="conges" class="ml-2 bg-green-200 p-1 rounded">Congés</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="alternance" class="form-checkbox" />
              <label for="alternance" class="ml-2 bg-green-200 p-1 rounded">Alternance</label>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
