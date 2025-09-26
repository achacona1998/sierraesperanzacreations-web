import { describe, it, expect } from 'vitest'
import { Items as ReactItems } from '../../src/sections/ReactSection/constant/items'
import { Items as PythonItems } from '../../src/sections/PythonSection/constant/items'
import { Items as JsItems } from '../../src/sections/JsSection/constant/items'
import { Items as DevOpsItems } from '../../src/sections/DevOpsSection/constant/items'
import { Items as CollaborativeItems } from '../../src/sections/CollaborativeSection/constant/items'
import { 
  OurServices, 
  Resources, 
  Contact, 
  GitHub, 
  Linkedin 
} from '../../src/sections/ContactSection/constants/items'

describe('React Section Items', () => {
  it('should have correct structure', () => {
    expect(ReactItems).toBeInstanceOf(Array)
    expect(ReactItems).toHaveLength(3)
    
    ReactItems.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('content')
      expect(typeof item.id).toBe('number')
      expect(typeof item.title).toBe('string')
      expect(typeof item.content).toBe('string')
    })
  })

  it('should have unique ids', () => {
    const ids = ReactItems.map(item => item.id)
    const uniqueIds = [...new Set(ids)]
    expect(ids).toHaveLength(uniqueIds.length)
  })
})

describe('Python Section Items', () => {
  it('should have correct structure', () => {
    expect(PythonItems).toBeInstanceOf(Array)
    expect(PythonItems).toHaveLength(3)
    
    PythonItems.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('content')
    })
  })
})

describe('JavaScript Section Items', () => {
  it('should have correct structure', () => {
    expect(JsItems).toBeInstanceOf(Array)
    expect(JsItems).toHaveLength(4)
    
    JsItems.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('icon')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('content')
    })
  })
})

describe('DevOps Section Items', () => {
  it('should have correct structure', () => {
    expect(DevOpsItems).toBeInstanceOf(Array)
    expect(DevOpsItems).toHaveLength(4)
    
    DevOpsItems.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('content')
    })
  })
})

describe('Collaborative Section Items', () => {
  it('should have correct structure', () => {
    expect(CollaborativeItems).toBeInstanceOf(Array)
    expect(CollaborativeItems).toHaveLength(3)
    
    CollaborativeItems.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('content')
    })
  })
})

describe('Contact Section Constants', () => {
  it('should have correct OurServices structure', () => {
    expect(OurServices).toBeInstanceOf(Array)
    expect(OurServices).toHaveLength(4)
    
    OurServices.forEach(service => {
      expect(service).toHaveProperty('id')
      expect(service).toHaveProperty('name')
      expect(typeof service.id).toBe('number')
      expect(typeof service.name).toBe('string')
    })
  })

  it('should have correct Resources structure', () => {
    expect(Resources).toBeInstanceOf(Array)
    expect(Resources).toHaveLength(4)
    
    Resources.forEach(resource => {
      expect(resource).toHaveProperty('id')
      expect(resource).toHaveProperty('name')
    })
  })

  it('should have correct Contact structure', () => {
    expect(Contact).toBeInstanceOf(Array)
    expect(Contact).toHaveLength(2)
    
    Contact.forEach(contact => {
      expect(contact).toHaveProperty('id')
      expect(contact).toHaveProperty('link')
      expect(contact).toHaveProperty('name')
    })
  })

  it('should have valid contact links', () => {
    const emailContact = Contact.find(c => c.link.includes('mailto:'))
    const phoneContact = Contact.find(c => c.link.includes('tel:'))
    
    expect(emailContact).toBeDefined()
    expect(phoneContact).toBeDefined()
  })

  it('should have correct GitHub structure', () => {
    expect(GitHub).toBeInstanceOf(Array)
    expect(GitHub).toHaveLength(2)
    
    GitHub.forEach(github => {
      expect(github).toHaveProperty('id')
      expect(github).toHaveProperty('link')
      expect(github).toHaveProperty('name')
      expect(github.link).toContain('github.com')
    })
  })

  it('should have correct LinkedIn structure', () => {
    expect(Linkedin).toBeInstanceOf(Array)
    expect(Linkedin).toHaveLength(2)
    
    Linkedin.forEach(linkedin => {
      expect(linkedin).toHaveProperty('id')
      expect(linkedin).toHaveProperty('link')
      expect(linkedin).toHaveProperty('name')
      expect(linkedin.link).toContain('linkedin.com')
    })
  })
})