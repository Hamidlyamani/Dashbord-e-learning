
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
        <DatePicker  />
        <div className=" ">
          <h2 className="text-[25px] text-background font-Urb-bold  mb-4">Filtres</h2>

          <div className="mb-6">
            <h3 className="text-[15px] font-Urb-bold text-[#718095]">Types</h3>
            <div className="flex items-center my-1">
              <input type="checkbox" id="cours" className="form-checkbox" />
              <label htmlFor="cours" className="ml-2">Cours</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="examens" className="form-checkbox" checked />
              <label htmlFor="examens" className="ml-2 bg-[] p-1 rounded-[8px]">Examens</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="devoirs" className="form-checkbox" />
              <label htmlFor="devoirs" className="ml-2 bg-gray-200 p-1 rounded-[8px]">Devoirs</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="evenements" className="form-checkbox" />
              <label htmlFor="evenements" className="ml-2">Événements</label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Formations</h3>
            <div className="flex items-center my-1">
              <input type="checkbox" id="maths" className="form-checkbox" />
              <label htmlFor="maths" className="ml-2">Maths</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="physique" className="form-checkbox" checked />
              <label htmlFor="physique" className="ml-2">Physique</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="economie" className="form-checkbox" />
              <label htmlFor="economie" className="ml-2">Économie</label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Période</h3>
            <div className="flex items-center my-1">
              <input type="checkbox" id="cours_periode" className="form-checkbox" />
              <label htmlFor="cours_periode" className="ml-2 bg-light_orange p-1 rounded-[8px]">Cours</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="conges" className="form-checkbox" checked />
              <label htmlFor="conges" className="ml-2 bg-light_greenp-1 rounded-[8px]">Congés</label>
            </div>
            <div className="flex items-center my-1">
              <input type="checkbox" id="alternance" className="form-checkbox" />
              <label htmlFor="alternance" className="ml-2 bg-light_yallow p-1 rounded-[8px]">Alternance</label>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
