
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
        <div className=" ">
          <h2 className="text-[xl] font-Urb-bold  mb-4">Filtres</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Types</h3>
            <div className="flex items-center">
              <input type="checkbox" id="cours" className="form-checkbox" />
              <label for="cours" className="ml-2">Cours</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="examens" className="form-checkbox" checked />
              <label for="examens" className="ml-2 bg-purple-200 p-1 rounded">Examens</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="devoirs" className="form-checkbox" />
              <label for="devoirs" className="ml-2 bg-gray-200 p-1 rounded">Devoirs</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="evenements" className="form-checkbox" />
              <label for="evenements" className="ml-2">Événements</label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Formations</h3>
            <div className="flex items-center">
              <input type="checkbox" id="maths" className="form-checkbox" />
              <label for="maths" className="ml-2">Maths</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="physique" className="form-checkbox" checked />
              <label for="physique" className="ml-2 text-blue-500">Physique</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="economie" className="form-checkbox" />
              <label for="economie" className="ml-2">Économie</label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Période</h3>
            <div className="flex items-center">
              <input type="checkbox" id="cours_periode" className="form-checkbox" />
              <label for="cours_periode" className="ml-2 bg-pink-200 p-1 rounded">Cours</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="conges" className="form-checkbox" checked />
              <label for="conges" className="ml-2 bg-green-200 p-1 rounded">Congés</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="alternance" className="form-checkbox" />
              <label for="alternance" className="ml-2 bg-green-200 p-1 rounded">Alternance</label>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
